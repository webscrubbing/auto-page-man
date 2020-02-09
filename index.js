const waitFor = sec => new Promise(r => setTimeout(() => r(sec), sec * 1000));

document.getElementById('go').addEventListener('click', async (e) => {
    const url = document.getElementById('url').value;
    const urlObj = new URL(url);
    const withoutQueries = urlObj.origin + urlObj.pathname;

    const tryCount = 4;
    let count = 0;
    while(true) {
        if (tryCount === count) {
            location.href = withoutQueries + '?chrome=1';
            break;
        }

        await fetch(withoutQueries).then(r => r.text);
        await waitFor(1.5);
        console.log(count);
        count++;
    }
});
