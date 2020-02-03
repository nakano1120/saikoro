var taro = new Vue({
    el: "#app",
    data: {
      sai1:1,
      sai2:1,
      sai3:1,
      dicedata:[
        "<img class='ima' src='img/dice0.png'>",
        "<img class='ima' src='img/dice1.png'>",
        "<img class='ima' src='img/dice2.png'>",
        "<img class='ima' src='img/dice3.png'>",
        "<img class='ima' src='img/dice4.png'>",
        "<img class='ima' src='img/dice5.png'>",
        "<img class='ima' src='img/dice6.png'>"
      ],
      msg:"ピンゾロ"
    },
    methods:{
      diceroll:function(){
        this.sai1 = Math.floor( Math.random() * 6 ) + 1;
        this.sai2 = Math.floor( Math.random() * 6 ) + 1;
        this.sai3 = Math.floor( Math.random() * 6 ) + 1;
        this.yaku_mitsuru()
      },
      yaku_mitsuru:function(){
        if(this.sai1==1 && this.sai2==1 && this.sai3==1){
            
        }else{
          this.msg="役なし"
        }
      }
    }
})

