
import { Route, Routes } from 'react-router-dom'
import './globals.css'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'

const App = () => {
    return (
        <div>
            <main className="flex h-screen">
                <Routes>
                    {/* public routes */}
                    <Route element={<AuthLayout />}>
                        <Route path="/sign-in" element={<SigninForm />} />
                        <Route path="/sign-up" element={<SignupForm />} />
                    </Route>

                    {/* private routes*/}


                </Routes>
            </main>
        </div>
    )
}

export default App