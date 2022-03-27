import axios from 'axios';

export async function getOnlinePlayers(): Promise<string> {
    const json = (await axios.get("https://api.mcsrvstat.us/2/8b8t.xyz")).data

    const online = json.players.online
    const max = json.players.max

    return online + " / " + max;
}
