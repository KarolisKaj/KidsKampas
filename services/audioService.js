import { Audio } from 'expo-av';

export default playSound = (file) => {
    (async (file) => {
        let soundObject = await Audio.Sound.createAsync(file);
        await soundObject.sound.playAsync()
    })(file)
} 
