export default function Portfolio() {
    return (
        <div>
            <div class="p-6 max-w-lg mx-auto flex items-center space-x-1">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div>

                    <div class="relative text-xl font-medium text-black space-y-6 p-6 max-w-lg mx-auto flex items-center shadow-md bg-white sm:rounded-3xl">
                        <h1>Projects I Have Created</h1>
                    </div>
                </div>
            </div>

            <div class="items-center">
                <div class="grid grid-rows-1 grid-flow-col flex center visible opacity-100 transform transition-opacity">
                    <div class="col-start-5 col-end-1- text-right relative row-start-1 row-end-1- box-border block inset-0 z-50">
                        <p class="mt-2 mb-2 text-lg">Featured Project</p>
                        <h3 class="mb-2">Project Title</h3>
                        <div class="shadow-md relative transition-shadow p-3  bg-gray-300">
                            <p>Project description here</p>
                        </div>
                        <ul>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Other tech</li>
                        </ul>
                        <div>
                            <a> links</a>
                            <a> links</a>
                        </div>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-r shadow-lg transform z-0 max-w-lg">
                        <img src="/images/food.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}