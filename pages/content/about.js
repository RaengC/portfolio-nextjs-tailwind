export default function About() {
    return (
        <div>
            <div class="p-6 max-w-lg mx-auto flex items-center space-x-1">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
                        <img class="" src='/images/profile.jpg' alt="picture Raeng Castagna"></img>
                            <div classs="space-y-0.5">
                                <h1>Raeng Castagna</h1>
                                <h2>portfolio website</h2>
                            </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-6 m-4 sm:rounded">
                <h1>About Me</h1>
                <p>Hello! I'm Raeng (pronouced Reign), I'm a software engineer based in Melbourne, Australia.</p>
                <p >I enjoy creating and building exceptional websites and applications.</p>
                <p>Here are a few technologies I am currenly working with:</p>
                <ul class="grid grid-cols-3 gap-4">
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>HTML & CSS</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>Mongodb</li>
                    <li>Next.js</li>
                    <li>Tailwind</li>
                </ul>
            </div>
            
        
        </div>
    )
}