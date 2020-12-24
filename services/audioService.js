import { Audio } from 'expo-av';

export default getSoundAsync = async (location) => {
    let result = await Audio.Sound.createAsync(
        location
    );
    return result;
} 