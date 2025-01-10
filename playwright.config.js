testDir: 'tests',
use: {
  browserName: 'chromium',
  headless: true
},
reporter: [['list'], ['html', { outputFile: 'test-report.html' }]]