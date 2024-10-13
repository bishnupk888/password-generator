

const SignupComponent = () => {
  return (
    <div className='h-auto w-auto items-center justify-center'>
        <div className='pt-20'>
            <form action="" className="flex flex-col items-center justify-center space-y-2">
                <label htmlFor=""> email</label>
                <input type="email" />
                <label htmlFor="">password</label>
                <input type="password" />
                <label htmlFor=""> confirm password</label>
                <input type="password" />  
            </form>
        </div>
    </div>
  )
}

export default SignupComponent