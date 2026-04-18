const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    let browser;
    try {
        console.log('Launching browser...');
        browser = await puppeteer.launch({
            headless: 'new'
        });
        const page = await browser.newPage();

        // Wait for dev server to be ready
        console.log('Navigating to resume page...');
        await page.goto('http://localhost:5173/aman_kumar.html', {
            waitUntil: 'networkidle2',
            timeout: 60000
        });

        console.log('Generating PDF...');
        await page.pdf({
            path: path.join(__dirname, 'public', 'aman_kumar.pdf'),
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
            }
        });

        console.log('PDF successully generated at public/aman_kumar.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    } finally {
        if (browser) await browser.close();
    }
}

generatePDF();
