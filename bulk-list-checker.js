async function get_db() {
    var db_resp = await window.fetch('https://aarongc.com/website/media/jank.json');
    var ret = await db_resp.json();
    return ret;
}

get_db().then(db => {
    card_names = Array.from(document.getElementsByClassName('card-text-card-name'));
    card_names.forEach(card_name => {
        var og_text = card_name.innerText;
        var name = card_name.innerText.trim();

        if (db[name] !== undefined) {
            card_name.innerText = ' ✅ ' + og_text + ' ';
        }
    });
});
