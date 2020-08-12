
export default function handleTime(argTempo){
    const tempo = argTempo.split(':');

    if(!tempo[2]) tempo[2] = '00';
    
    const min = (+tempo[0])*60 + (+tempo[1]) + (+tempo[2])/60;
    
    return min;
    
}