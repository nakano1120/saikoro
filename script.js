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
          this.msg="ピンゾロ"
        }else if(this.sai1==2 && this.sai2==2 && this.sai3==2){
          this.msg="アラシ"
        }else if(this.sai1==3 && this.sai2==3 && this.sai3==3){
          this.msg="アラシ"
        }else if(this.sai1==4 && this.sai2==4 && this.sai3==4){
          this.msg="アラシ"
        }else if(this.sai1==5 && this.sai2==5 && this.sai3==5){
          this.msg="アラシ"
        }else if(this.sai1==6 && this.sai2==6 && this.sai3==6){
          this.msg="アラシ"
        }else{
          this.msg="役なし"
        }
      }
    }
})

