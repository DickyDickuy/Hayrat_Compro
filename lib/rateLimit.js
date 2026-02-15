// Simple in-memory rate limiting
// For production, consider using Redis or a dedicated rate limiting service

const rateLimitMap = new Map();

export function rateLimit(options = {}) {
  const {
    interval = 60 * 1000, // 1 minute default
    maxRequests = 60, // 60 requests per interval default
  } = options;

  return {
    check: (identifier) => {
      const now = Date.now();
      const userLimit = rateLimitMap.get(identifier) || { count: 0, resetTime: now + interval };

      // Reset count if interval has passed
      if (now > userLimit.resetTime) {
        userLimit.count = 0;
        userLimit.resetTime = now + interval;
      }

      // Increment request count
      userLimit.count++;
      rateLimitMap.set(identifier, userLimit);

      // Check if limit exceeded
      const isLimited = userLimit.count > maxRequests;
      const remaining = Math.max(0, maxRequests - userLimit.count);
      const resetTime = Math.ceil((userLimit.resetTime - now) / 1000);

      return {
        limited: isLimited,
        remaining,
        resetTime,
      };
    },
  };
}

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime + 60000) { // 1 minute grace period
      rateLimitMap.delete(key);
    }
  }
}, 10 * 60 * 1000);

// Rate limit configurations for different endpoints
export const rateLimits = {
  // Public API endpoints - more permissive
  articles: rateLimit({ interval: 60 * 1000, maxRequests: 100 }), // 100 req/min
  
  // Auth endpoints - strict limits
  login: rateLimit({ interval: 15 * 60 * 1000, maxRequests: 5 }), // 5 req/15min
  register: rateLimit({ interval: 60 * 60 * 1000, maxRequests: 3 }), // 3 req/hour
  
  // Article mutations - moderate limits
  createArticle: rateLimit({ interval: 60 * 1000, maxRequests: 10 }), // 10 req/min
  updateArticle: rateLimit({ interval: 60 * 1000, maxRequests: 20 }), // 20 req/min
};

// Helper to get client identifier (IP address)
export function getClientIdentifier(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
  return ip;
}
