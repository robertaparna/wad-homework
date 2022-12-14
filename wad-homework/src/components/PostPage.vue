<template>
    <div class="SinglePost">
        <div id="form">
            <input name="date" type="image" id="image" required v-model="post.picture" />
            <input name="file" type="image" id="image" required v-model="post.picture" />
            <input name="body" type="text" id="body" required v-model="post.body" />
            <input name="likes" type="button" id="likes" required v-model="post.likes" />
        </div>
    </div>
</template>