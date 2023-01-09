<template>
    <main-header />
    <sub-header heading="#Blog" subHeading="Read our latest blog posts" />
    <div class="container">
        <blog-posts
            v-for="(blog, index) in blogs"
            :key="index"
            :date="blog.date"
            :image_url="blog.img"
            :title="blog.title"
            :content="blog.content"
        />
    </div>
    <page-index />
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import PageIndex from "@/components/PageIndex.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, BlogPosts, PageIndex, MainHeader, MainFooter },
    name: "BlogView",
    data() {
        return {
            blogs: [
                {
                    date: "13/01",
                    img: require("@/assets/images/blog/dd2.jpg"),
                    priority: "high",
                    title: "Purdue University Agriculture News",
                    content:
                    
                        "Purdue Agriculture is a leader in innovative learning, discovery and engagement in agriculture, food and natural resources.",
                },
                {
                    date: "13/04",
                    img: require("@/assets/images/blog/dd3.jpg"),
                    title: " Farmers Weekly - Farming & Agricultural news from Farmers Weekly Interactive",
                    content:
                        "Farmers Weekly is the leading multimedia information service for farmers and agricultural businesses. It provide news, market prices, technical advice, opinion and a range of vital interactive services for farm businesses of all shapes and sizes",
                },
                {
                    date: "12/01",
                    img: require("@/assets/images/blog/dd4.jpg"),
                    title: " Agri Farming",
                    content:
                        "Welcome to agrifarming.in. Here you can find information related to agriculture farming information in India. This blog also covers various factors involved in agriculture farming along with project reports and case studies in India. It may also provide some general information about agriculture farming",
                },
                {
                    date: "16/01",
                    img: require("@/assets/images/blog/dd5.jpg"),
                    title: "ScienceDaily - Agriculture and Food News",
                    content:
                        "Agricultural research news. From fertilizers and organic farming to maximizing crops and hybridization, read about advancements in agriculture.",
                },
                {
                    date: "06/07",
                    img: require("@/assets/images/blog/dd6.jpg"),
                    title: " Successful Farming",
                    content:
                        "Successful Farming is for families who make farming and ranching their business. Find the latest ag news, including updates on farm policy, business, machinery, technology, crop news, livestock updates, and more.",
                },
            ],
        };
    },
};
</script>
