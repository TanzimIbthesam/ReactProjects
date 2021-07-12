import { useState } from "react";

const Login=()=>{
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const handleSubmit=(e)=>{
		e.preventDefault();
          console.log(email,password);
	}

     return(
         
         <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-md w-full space-y-8">
			<div>
			
				<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Sign in to your account
				</h2>
				
			</div>

			<div class="rounded bg-white max-w-md  overflow-hidden shadow-xl p-5">

				<form onSubmit={handleSubmit}>
					<input type="hidden" name="remember" value="true"/>
					<div class="rounded-md shadow-sm -space-y-px">
						<div class="grid gap-6">
							<div class="col-span-12">
								<label for="first_name" class="block text-sm font-medium text-gray-700">Email</label>
								<input type="email" 
								onChange={(e)=>setEmail(e.target.value)}
								
								class="mt-1 focus:ring-indigo-500 
								focus:border-indigo-500 block 
								w-full shadow-sm sm:text-sm
								 border-gray-300 rounded-md"/>
							</div>

							<div class="col-span-12">
								<label for="email_address" class="block text-sm font-medium text-gray-700">Password</label>
								<input type="text" name="email_address" id="email_address" autocomplete="email" 
								  onChange={(e)=>setPassword(e.target.value)}
								class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 
								block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
							</div>
						</div>
					</div>

					


					<div>
						<button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span class="absolute left-0 inset-y-0 flex items-center pl-3">
								
								<svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
								</svg>
							</span>
							Sign in
						</button>
					</div>
				</form>
		</div>
	</div>
         </div>
        
		
			
           
					
           
			
     )
     
      
      
   

}

export default Login;