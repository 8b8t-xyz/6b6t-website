import type {NextPage} from 'next'
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <h2>About</h2>
            <ul className="mb-2">
                <li>IP: 8b8t.xyz</li>
                <li>Versions: 1.12.2 to 1.18.x (1.12.2 Recommended)</li>
                <li>CPU: AMD Ryzen 7 3700X</li>
                <li>RAM: 64GB DDR4</li>
                <li>STORAGE: 2x8TB Datacenter grade HDDs</li>
                <li>DDOS Protection: Cosmicguard</li>
                <li>8b8t is a non-vanilla anarchy server with no rules which means everything is
                    allowed and you can not get punished (No bans or mutes or kicks).
                </li>
            </ul>

            <h2>Discord</h2>
            <p className="pb-2">
                Join the 8b8t.xyz Official Discord Server to keep up with the latest updates with the
                server: <a href="https://discord.gg/bMG6tdwW" target="_blank"
                           className="link"
                           rel="noreferrer">https://discord.gg/bMG6tdwW</a>
            </p>

            <h2>Popular questions</h2>

            <h3>What is 8b8t?</h3>
            <p>
                8b8t is a Minecraft Anarchy Server, that means there are no rules. It&apos;s one of the
                few
                32k (also known as offline mode) anarchy servers which allows 32k weapons and illegals. The
                server is semi-vanilla, it has commands like /tpa,and /nick aswell as /nc. 8b8t started January
                16 2022 and the map will never reset.
            </p>

            <h3>What is 8b8t seed?</h3>
            <p>6b6t seed is the same as 2b2t seed: -935168149848476023</p>

            <h3>Is hacking allowed?</h3>
            <p>Yes, as mentioned above, there are truly no rules.</p>

            <h3>Are lag machines allowed?</h3>
            <p>
                Yes, the 8b8t admin has already patched most of the lag machines and if you help us find a
                working one, we will reward you.
            </p>
        </Layout>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
