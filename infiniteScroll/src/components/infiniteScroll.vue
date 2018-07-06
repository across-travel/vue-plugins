<template>
    <div>

        <div v-if="box1" ref="box" style=" ">
            <infinite-scroll style="margin: 10px;" :parent-element="true" :infinite-function = "infinite1"  :infinite-loading = "infiniteLoading1" >
                <div slot>
                    <div style="padding: 10px;" v-for="item in list3">
                        {{item}}
                    </div>
                </div>
    
                <div slot="bottom">
                    bottom
                </div>
            </infinite-scroll>
        </div>

    </div>
</template>
      
<script>

import infiniteScroll from './infiniteScroll/infiniteScroll.vue';

export default {
    name: 'infiniteScroll',
    components: {
        "infinite-scroll": infiniteScroll
    },
    data () {
        return {
            list3: [2, 2, 2, 2, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            list4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            fox: false,
            infiniteLoading1: false,
            infiniteLoading2: false,
            box1: true,
            box: 'boxessss'
        }
    },
    created(){

    },
    methods: {
        infinite1() {
            if(this.infiniteLoading1){
                return false;
            }
            this.infiniteLoading1 = true;
            setTimeout(()=> {
                this.list3.push('aaa');
                this.infiniteLoading1 = false;
                if(this.list3.length > 22){
                    this.infiniteLoading1 = true;
                }
                // document.documentElement.style.overflow = 'hidden';
            }, 1000);
        },
        infinite2() {
            this.infiniteLoading2 = true;
            setTimeout(()=> {
                this.list4.push('bbb');
                this.infiniteLoading2 = false;
            }, 1000);
        }
    }
}
</script>
      
<style scoped>
    html, body {
        margin: 0;
        padding: 0;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .parent{
        position: relative;
        /* height: 120px; */
        overflow-y: auto;
        padding: 10px;
        opacity: red;
    }

</style>
      