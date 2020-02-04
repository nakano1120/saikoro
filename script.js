var taro = new Vue({
    el: "#app",
    data: {
      p:[100,100,100,100],
      yaku:["","","",""],
      rank:[0,0,0,0],
      sai:[1,1,1],
      sai1:0,
      sai2:0,
      sai3:0,
      nowplayer:0,
      saicount:0,
      winner:0,
      cake:5,
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
        this.sai[0] = this.sai1   ///配列を参照すると更新されないので間接的に
        this.sai[1] = this.sai2
        this.sai[2] = this.sai3
        this.yaku_mitsuru()
        this.saicount++
        if(this.saicount>2){
          this.saicount=0
          this.nowplayer++
        }
        if(this.nowplayer>3){
          this.nowplayer=0
          this.power()
          this.yaku[0]=""
          this.yaku[1]=""
          this.yaku[2]=""
          this.yaku[3]=""
        }
      },
      yaku_mitsuru:function(){
        if(this.sai[0]==1 && this.sai[1]==1 && this.sai[2]==1){
          this.msg="ピンゾロ"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=13;
        }else if(this.sai[0]==2 && this.sai[1]==2 && this.sai[2]==2){
          this.msg="アラシ(2)"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=8;
        }else if(this.sai[0]==3 && this.sai[1]==3 && this.sai[2]==3){
          this.msg="アラシ(3)"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=9;
        }else if(this.sai[0]==4 && this.sai[1]==4 && this.sai[2]==4){
          this.msg="アラシ(4)"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=10;
        }else if(this.sai[0]==5 && this.sai[1]==5 && this.sai[2]==5){
          this.msg="アラシ(5)"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=11;
        }else if(this.sai[0]==6 && this.sai[1]==6 && this.sai[2]==6){
          this.msg="アラシ(6)"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=12;
        }else if(this.sai.indexOf(4)!== -1 && this.sai.indexOf(5)!== -1 && this.sai.indexOf(6)!== -1 ){
          this.msg="シゴロ"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=7;
        }else if(this.sai.indexOf(1)!== -1 && this.sai.indexOf(2)!== -1 && this.sai.indexOf(3)!== -1 ){
          this.msg="ヒフミ"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=-1;
        }else if(this.sai[0]==this.sai[1]){
          this.msg=this.sai[2]+"点"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=this.sai[2];
        }else if(this.sai[0]==this.sai[2]){
          this.msg=this.sai[1]+"点"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=this.sai[1];
        }else if(this.sai[1]==this.sai[2]){
          this.msg=this.sai[0]+"点"
          this.yaku[this.nowplayer]=this.msg;
          this.saicount=2
          this.rank[this.nowplayer]=this.sai[0];
        }else{
          this.msg="役なし"
          this.yaku[this.nowplayer]=this.msg;
          this.rank[this.nowplayer]=0;
        }
      },
      power:function(){
        let saidai = Math.max(this.rank[0],this.rank[1],this.rank[2],this.rank[3],)
        this.winner = this.rank.indexOf(saidai)
        alert((this.winner+1)+"Pの勝ちです")
        ///役によって報酬が変わる
        if(saidai<7 && saidai>0){
          this.p[this.winner]+=this.cake*2
        }else if(saidai==7){
          this.p[this.winner]+=this.cake*3
        }else if(saidai>7 && saidai != 13){
          this.p[this.winner]+=this.cake*5
        }else if(saidai==13){
          this.p[this.winner]+=this.cake*10
        }
        if(saidai>0){
          ///勝者が自分以外の場合掛け金を減らす
          if(this.winner != 0){
            this.p[0]-=this.cake
          }
          if(this.winner != 1){
            this.p[1]-=this.cake
          }
          if(this.winner != 2){
            this.p[2]-=this.cake
          }
          if(this.winner != 3){
            this.p[3]-=this.cake
          }
        }
      }
    }
})

