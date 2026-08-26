import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import SpinnerLoader from './SpinnerLoader';

const LoginForm = () => {

    const { register,
        handleSubmit,
        errors,
        onSubmitLogin,
        handleShowPassword,
        showPassword,
        isLoading } = useAuth()

    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-4 px-4'>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div className='flex flex-col gap-6 bg-slate-900 border border-slate-700 p-8 rounded-2xl'>
                    <h1 className='text-2xl font-bold text-white text-center'>
                        Sign in to your account
                    </h1>

                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>
                            User Name
                        </label>
                        <input
                            {...register("username", {
                                required: "User name is required",
                            })}
                            type='text'
                            placeholder='Enter username...'
                            className='w-full p-2 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none transition focus:border-blue-500'
                        />
                        {errors.username && (
                            <p className='text-red-400 text-sm mt-2'>
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-slate-300 mb-2'>
                            Password
                        </label>
                        <div className="relative">
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder='Enter password...'
                                className='w-full p-2 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none transition focus:border-blue-500'
                            />
                            <button type='button' onClick={handleShowPassword} className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer">
                                {
                                    showPassword ? <EyeOff size={18} /> : <Eye size={18} />
                                }
                            </button>
                        </div>
                        {errors.password && (
                            <p className='text-red-400 text-sm mt-2'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type='submit'
                        className='w-full py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:scale-98 text-white font-semibold rounded-lg transition-all cursor-pointer flex justify-center'
                    >
                        {
                            isLoading ? <SpinnerLoader />
                                : "Login"
                        }
                    </button>

                </div>
            </form>
            <p className="text-white text-[0.9rem]">Username: emilys / Password: emilyspass</p>
        </div>
    )
}

export default LoginForm