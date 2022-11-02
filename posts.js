window.onload = function () {
    function createPostHeader(date) {
        let header = document.createElement("div");
        header.className = 'post-header';
        let icon = document.createElement('span');
        icon.className = 'material-symbols-outlined'
        icon.innerText = 'account_circle'
        let timestamp = document.createElement('p');
        timestamp.innerText = date;
        header.appendChild(icon)
        header.appendChild(timestamp)
        return header;
    }

    function createPostImage(picture) {
        let imageContainer = document.createElement("div");
        imageContainer.className = 'post-img'

        let image = document.createElement('img')
        image.src = picture;

        imageContainer.appendChild(image);
        return imageContainer;
    }

    function createPostBody(body) {
        let bodyContainer = document.createElement('div');
        bodyContainer.className = 'post-content'

        let bodyText = document.createElement('p');
        bodyText.innerText = body;

        bodyContainer.appendChild(bodyText);
        return bodyContainer;
    }

    function createPostFooter() {
        let footerContainer = document.createElement('div');
        footerContainer.className = 'post-footer';

        let button = document.createElement('button');

        let icon = document.createElement('span');
        icon.className = "material-symbols-outlined";
        icon.innerText = 'thumb_up';

        button.appendChild(icon);

        footerContainer.appendChild(button);
        return footerContainer;
    }

    // fetch('http://myjson.dit.upm.es/api/bins/bsna')
    fetch('posts.json') //Fetch data from local JSON file
        .then((response) => response.json())
        .then(json => {
            let feed = document.getElementById("feed")
            console.log(feed)
            for (let i = 0; i < json.Posts.length; i++) {
                let post = document.createElement("div");
                post.className = 'post';

                post.appendChild(createPostHeader(json.Posts[i].date));

                if (json.Posts[i].picture) {
                    post.appendChild(createPostImage(json.Posts[i].picture))
                }

                post.appendChild(createPostBody(json.Posts[i].body))

                post.appendChild(createPostFooter())
                feed.appendChild(post);
                console.log(json.Posts[i].picture)
            }
        }).catch(err => {
            console.log(err)
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        })
}

//http://myjson.dit.upm.es/api/bins/bsna