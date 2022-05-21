function radar(speed,area){
    let result=''
    let difference=0
    let limit=0
    switch (area) {
        case 'motorway':
            limit=130;
            break;
            case 'interstate':
            limit=90;
            break;
            case 'city':
            limit=50;
            break;
            case 'residential':
            limit=20
            break;
    
        default:
            break;
    }
    if (speed<=limit&&speed>0){
       console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }else{
        difference=speed-limit;
       
           if(difference<=20){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`)
           }else if(difference<=40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speedin`)
           }else{
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless drivin`)

           }
       
    }

}radar(55, 'city')