import AuthForm from "@/components/AuthForm"
import React from "react"

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm formType="sign-up" />
    </section>
  )
}

export default SignUp
