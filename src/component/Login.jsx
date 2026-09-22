import { useState } from 'react'

const Login = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const [formError, setFormError] = useState({})


    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = validate(formValues)
        setFormError(errors)
        if (Object.keys(errors).length === 0) {
            console.log(formValues);
        }


        setFormValues({
            username: "",
            password: ""
        })
    }

    const validate = (values) => {

        const errors = {}

        if (!values.username) {
            errors.username = "Enter username"
        } else if (values.username.length < 3) {
            errors.username = "Enter atleast 3 carachters"
        }

        if (!values.password) {
            errors.password = "Enter a password";
        } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        } else if (!/[a-z]/.test(values.password)) {
            errors.password = "Password must contain a lowercase letter";
        } else if (!/[A-Z]/.test(values.password)) {
            errors.password = "Password must contain an uppercase letter";
        } else if (!/\d/.test(values.password)) {
            errors.password = "Password must contain a number";
        } else if (!/[@$!%*?&]/.test(values.password)) {
            errors.password = "Password must contain a special character";
        }

        return errors

    }


    return (
        <div className='h-screen flex justify-center items-center italic'>
            <form onSubmit={handleSubmit} className=' bg-linear-to-br from-fuchsia-600 to-violet-950 rounded-sm flex flex-col gap-5 p-10 w-1/2'>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="username" className=''>username</label>
                    <input value={formValues.username} type="text" onChange={handleChange} className=' px-5  focus:border-lime-600 py-3 border-b-2 outline-none' name='username' id='username' />
                    <p className=' text-red-400'>{formError.username && formError.username}</p>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="password" className=''>password</label>
                    <input value={formValues.password} type="password" onChange={handleChange} className=' px-5  focus:border-lime-600 py-3 border-b-2 outline-none' name='password' id='password' />
                    <p className=' text-red-400'>{formError.password && formError.password}</p>
                </div>
                <button className=' bg-white w-1/10 f self-center rounded-sm hover:bg-fuchsia-200  cursor-pointer'>Login</button>
            </form>
        </div>
    )
}

export default Login
