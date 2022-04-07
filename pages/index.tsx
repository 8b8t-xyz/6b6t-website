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
                <li>8b8t is a non-vanilla semi-cracked anarchy server with no rules which means everything is
                    allowed and you can not get punished.
                </li>
            </ul>

            <h2>Discord</h2>
            <p className="pb-2">
                Join the 8b8t.xyz Official Discord Server to keep up with the latest updates with the
                server: <a href="https://discord.gg/bMG6tdwW" target="_blank"
                           className="link"
                           rel="noreferrer">discord link</a>
            </p>

            <h2>Popular questions</h2>

            <h3>What is 8b8t?</h3>
            <p>
                8b8t is a semi cracked Minecraft Anarchy Server, that means there are no rules. It&apos;s the
                only
                semi-cracked 32k meta anarchy servers which allows 32k weapons and illegals. The
                server is semi-vanilla and semi cracked, it has commands like /tpa,and /nick with name colour. 8b8t started March 17
                2022 and the map will never reset.
            </p>

            <h3>What is 8b8t seed?</h3>
            <p>8b8t seed is the same as the old seed: -935168149848476023</p>

            <h3>Is hacking allowed?</h3>
            <p>Yes, as mentioned above, there are truly no rules.</p>

            <h3>Are lag machines allowed?</h3>
            <p>
                Yes, the 8b8t admin has already patched most of the lag machines and if you help us find a
                working one, he will reward you.
            </p>
            <h3>Announcements:</h3>
            <ul className="mb-3">
                <li>8b8t is now the first semi-cracked anarchy server</li>
                <li>Virus and Diowz have become engaged congrats from the 8b8t staff team</li>
                <li>somewhat fixed the anticheat</li>
                <li>fixed tablist</li>
                <li>fixed premium accounts not authenticating with mojang</li>
                <li>Added a way to reset your password automatically if you are on a cracked account</li>
            </ul>
        </Layout>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
