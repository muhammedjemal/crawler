"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_1 = __importDefault(require("fs"));
async function main() {
    const browser = await puppeteer_1.default.launch({
        headless: true,
        defaultViewport: null, // Override default viewport
        args: [
            '--disable-web-security', // Disable web security to bypass CORS
            '--disable-gpu', // Disable GPU acceleration
            '--no-sandbox', // Disable sandbox mode
            '--disable-setuid-sandbox', // Disable setuid sandbox
            '--disable-dev-shm-usage', // Disable /dev/shm usage
            '--disable-accelerated-2d-canvas', // Disable 2D canvas acceleration
            '--disable-gl-drawing-for-tests', // Disable GL drawing for tests
            '--disable-accelerated-video-decode', // Disable accelerated video decode
            '--disable-accelerated-mjpeg-decode', // Disable accelerated MJPEG decode
            '--disable-accelerated-webgl', // Disable accelerated WebGL
            '--disable-accelerated-overflow-scroll', // Disable accelerated overflow scroll
            '--disable-threaded-animation', // Disable threaded animation
            '--disable-threaded-scrolling', // Disable threaded scrolling
            '--disable-breakpad', // Disable crash reporting
            '--ignore-certificate-errors', // Ignore certificate errors
            '--ignore-certificate-errors-spki-list', // Ignore certificate errors SPKI list
            '--disable-infobars', // Disable infobars
            '--disable-popup-blocking', // Disable popup blocking
            '--disable-translate', // Disable translation
            '--disable-extensions', // Disable extensions
            '--disable-default-apps', // Disable default apps
            '--disable-prompt-on-repost', // Disable prompt on repost
            '--disable-background-networking', // Disable background networking
            '--disable-background-timer-throttling', // Disable background timer throttling
            '--disable-backgrounding-occluded-windows', // Disable backgrounding occluded windows
            '--disable-renderer-backgrounding', // Disable renderer backgrounding
            '--disable-webgl', // Disable WebGL
            '--disable-webgl2', // Disable WebGL 2.0
            '--disable-client-side-phishing-detection', // Disable client-side phishing detection
            '--disable-es3-apis', // Disable ES3 APIs
            '--disable-es3-gl-context', // Disable ES3 GL context
            '--mute-audio' // Mute audio
        ],
    });
    const page = await browser.newPage();
    console.log("going there..");
    await page.setRequestInterception(true); // Enable request interception
    // Disable unnecessary resources (images, CSS, fonts)
    page.on('request', (request) => {
        if (request.resourceType() === 'image' ||
            request.resourceType() === 'stylesheet' ||
            request.resourceType() === 'font') {
            request.abort();
        }
        else {
            request.continue();
        }
    });
    console.log("going to the first website ..");
    await page.goto('https://www.ethiopianreporter.com/128616/');
    console.log("Fetching the data from the first website...");
    let post1;
    let post2;
    let post3;
    let post4;
    let post5;
    let reporterPost;
    let fanaPost;
    let pressPost;
    // Evaluate the page to extract the posts
    await page.evaluate(() => {
        post1 = document.querySelectorAll(".tdb-block-inner.td-fix-index p")[0].textContent;
        post2 = document.querySelectorAll(".tdb-block-inner.td-fix-index p")[1].textContent;
        post3 = document.querySelectorAll(".tdb-block-inner.td-fix-index p")[2].textContent;
        console.log("the 1st posts are:", post1, post2, post3);
        // Return the extracted posts to be accessible outside the evaluate function
        return { post1, post2, post3 };
    }).then(async ({ post1, post2, post3 }) => {
        // Create a text file and write the posts to it
        reporterPost = `# ስለ ፡ ደስታ ፡ ሮቦት ፡ ሚዲያዎች ፡ ምን ፡ አሉ? \n # ሪፖርተር (ethiopianreporter.com) ከራሱ ፡ ዌብሳይት ፡ እንደሚከተለው ፡ ዘግቦታል ፦ \n ${post1}\n${post2}\n${post3} \n  => To read from their own website, please use this link:  https://www.ethiopianreporter.com/128616/`;
        fs_1.default.writeFileSync('posts.txt', reporterPost);
        console.log('reporter posts added successfully! continuing to the next one...');
    }).catch(() => {
        const errorMsg = "\n An Unknown error occured! the posts are not written or partially written, please retry running the code it may be fixed";
        fs_1.default.appendFileSync('posts.txt', errorMsg);
        console.log(errorMsg);
    });
    console.log("going to the second website ..");
    await page.goto('https://www.fanabc.com/archives/242013');
    console.log("Fetching the data from the second website...");
    await page.evaluate(() => {
        post1 = document.querySelectorAll(".entry-content.clearfix.single-post-content p")[0].textContent;
        post2 = document.querySelectorAll(".entry-content.clearfix.single-post-content p")[1].textContent;
        post3 = document.querySelectorAll(".entry-content.clearfix.single-post-content p")[2].textContent;
        post4 = document.querySelectorAll(".entry-content.clearfix.single-post-content p")[3].textContent;
        post5 = document.querySelectorAll(".entry-content.clearfix.single-post-content p")[4].textContent;
        console.log("the 2nd posts are:", post1, post2, post3, post4, post5);
        // Return the extracted posts to be accessible outside the evaluate function
        return { post1,
            post2, post3, post4, post5
        };
    }).then(async ({ post1, post2, post3, post4, post5 }) => {
        fanaPost = `\n\n\n# ፋና ብሮድካስቲንግ ኮርኮሬት (fanabc.com) ከራሱ ፡ ዌብሳይት ፡ እንደሚከተለው ፡ ዘግቦታል ፦ \n${post1}\n${post2}\n${post3}\n${post4}\n${post5}\n  => To read from their own website, please use this link:  https://www.fanabc.com/archives/242013`;
        fs_1.default.appendFileSync('posts.txt', fanaPost);
        console.log('fanabc posts added successfully! continuing to the next one...');
    });
    console.log("going to the third website ..");
    await page.goto('https://www.fanabc.com/archives/242013');
    console.log("Fetching the data from the third website...");
    // post-title
    await page.evaluate(() => {
        post1 = document.querySelectorAll(".entry-content p")[0].textContent;
        post2 = document.querySelectorAll(".entry-content p")[1].textContent;
        post3 = document.querySelectorAll(".entry-content p")[2].textContent;
        post4 = document.querySelectorAll(".entry-content p")[3].textContent;
        // Return the extracted posts to be accessible outside the evaluate function
        return { post1,
            post2, post3,
        };
    }).then(async ({ post1, post2, post3, }) => {
        pressPost = `\n\n\n# ኢትዮጵያን ፕረስ (press.et) ከራሱ ፡ ዌብሳይት ፡ እንደሚከተለው ፡ ዘግቦታል ፦ ${post1}\n${post2}\n${post3}\n  => To read from their own website, please use this link:  https://press.et/?p=125525 \n\n`;
        fs_1.default.appendFileSync('posts.txt', pressPost);
        console.log('press posts added successfully!', 'All relevant posts about the Robot fetched from different websites on the internet, open the text file now to read the posts.');
    });
    const data = `
        Contributors:

Jemal Muhammed      ID: UGR/8917/13
Beza Tilahun        ID: UGR/4139/13
`;
    fs_1.default.appendFileSync('posts.txt', data);
    console.log('Done');
    await browser.close();
}
main();
