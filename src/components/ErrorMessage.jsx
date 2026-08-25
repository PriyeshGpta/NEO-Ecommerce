const ErrorMessage = ({ error }) => {
    return <p className="p-6 text-red-400">Error fetching data: {error?.response?.data?.message} </p>

}

export default ErrorMessage