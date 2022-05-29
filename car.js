function createAssemblyLine(){


return{
    hasClima:(car)=>{
   car.temp=21,
   car.tempSettings=21,
   car.adjustTemp=()=>{
       if(this.temp<this.tempSettings){
           this.temp+=1
       }else if(this.temp>this.tempSettings){
           this.temp-=1
       }
   }
},
   hasAudio:(car)=>{
car.currentTrack={name:'',artist:''}
car.nowPlaying=()=>{
    if(this.name!==''&&this.artist!==''){
        console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
    }
}
   },
   hasParktronic:(car)=>{
    car.checkDistance=(distance)=>{
  if(distance<0.1){
      console.log("Beep! Beep! Beep!")
  }else if(distance<0.2){
    console.log("Beep! Beep!")
  }else if(distance<0.5){
    console.log("Beep!")
  }else{
      console.log('')
  }
    }
   }
}

}
