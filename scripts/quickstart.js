#!/usr/bin/env node

/**
 * Quick Start Script for Hayrat Indonesia Website
 * This script helps you get started quickly
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('\n🚀 Hayrat Indonesia - Quick Start\n');
console.log('=' .repeat(50));

// Check if .env.local exists
const envPath = path.join(__dirname, '..', '.env.local');
if (!fs.existsSync(envPath)) {
  console.error('\n❌ Error: .env.local file not found!');
  console.log('Please make sure .env.local exists in the root directory.\n');
  process.exit(1);
}

console.log('\n✅ Environment file found');

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('\n📦 Installing dependencies...');
  console.log('This may take a few minutes...\n');
  
  exec('npm install', { cwd: path.join(__dirname, '..') }, (error, stdout, stderr) => {
    if (error) {
      console.error(`\n❌ Error installing dependencies: ${error.message}`);
      return;
    }
    console.log('✅ Dependencies installed successfully!\n');
    showNextSteps();
  });
} else {
  console.log('✅ Dependencies already installed\n');
  showNextSteps();
}

function showNextSteps() {
  console.log('=' .repeat(50));
  console.log('\n📋 Next Steps:\n');
  console.log('1️⃣  Create your first admin user:');
  console.log('   → node scripts/createAdmin.js\n');
  console.log('2️⃣  (Optional) Add sample articles:');
  console.log('   → node scripts/seedArticles.js\n');
  console.log('3️⃣  Start the development server:');
  console.log('   → npm run dev\n');
  console.log('4️⃣  Open your browser:');
  console.log('   → http://localhost:3000\n');
  console.log('5️⃣  Login to admin:');
  console.log('   → http://localhost:3000/admin/login');
  console.log('   → Email: admin@hayrat.id');
  console.log('   → Password: admin123\n');
  console.log('=' .repeat(50));
  console.log('\n📖 For detailed instructions, see:');
  console.log('   → SETUP.md');
  console.log('   → README.md');
  console.log('   → PROJECT_SUMMARY.md\n');
  console.log('🎉 Happy coding!\n');
}
