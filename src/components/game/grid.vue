<template>
    <div class="gridComponent">
        
    </div>
</template>

<script>
    import Vue from 'vue';
    export default Vue.component('row', {
        props: {
            rowNumber: {type: String, require: true},
            x: {type: int, require: true},
            y: {type: int, require: true},
            z: {type: int, require: true},
        },
        methods: {
            getClass: function () {
                if (this.rowNumber === "1") {
                    x = 0; y= 0;
                    for(x = 0; x < 12; x++){
                        for (y= 0 y < 6)
                        x++; y++;
                        return x.toString(), y.toString();
                    }
                } 
            }
        }
    });
</script>