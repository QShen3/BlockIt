console.log("start");
let user = '';

function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    if (item.user) {
        user = item.user;
    }
}

var getting = browser.storage.local.get("user");
getting.then(onGot, onError);

function tiebaListHide() {
    let lists = $("li.j_thread_list");
    lists.each((i, list) => {
        let name = $(list).find("div.threadlist_lz").find("a.frs-author-name").attr("data-field");
        name = JSON.parse(name).un;
        if (name == user) {
            $(list).hide();
        }
    })
}

const url = window.location.href.toString()
if (url.indexOf('tieba.baidu.com/f')) {
    tiebaListHide();
    let node = $("div#pagelet_frs-list\\/pagelet\\/thread")[0];
    let observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type == 'attributes') {
                tiebaListHide();
            }
        }
    });
    observer.observe(node, {
        attributes: true
    })
};

console.log("end");