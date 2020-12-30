import { Audio } from 'expo-av';

export default playSound = (location) => {
    (async (location) => {
        let soundObject = await Audio.Sound.createAsync(location);
        await soundObject.sound.playAsync()
    })(location)
} 
