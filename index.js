const waitFor = sec => new Promise(r => setTimeout(() => r(sec), sec * 1000));

document.getElementById('go').addEventListener('click', async (e) => {
    const url = document.getElementById('url').value;
    const urlObj = new URL(url);
    const withoutQueries = urlObj.origin + urlObj.pathname;

    const tryCount = 3;
    let count = 1;
    while(true) {
        if (tryCount === count) {
            location.href = withoutQueries;
            break;
        }

        await fetch(withoutQueries).then(r => r.text);
        await waitFor(2);
        console.log(count);
        count++;
    }
});
