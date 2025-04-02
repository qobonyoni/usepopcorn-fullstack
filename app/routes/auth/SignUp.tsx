import React from "react";
import { Form, Link } from "react-router";
import Button from "~/ui/components/Button";

function SignUp() {
  return (
    <main className=" grid h-[80vh] place-items-center">
      <Form className="flex flex-col gap-8" method="post">
        <h1 className="text-4xl">Sign Up</h1>
        <div>
          <input className="input__box" type="text" name="username" placeholder="firstname" />
        </div>
        <div>
          <input className="input__box" type="text" name="username" placeholder="username" />
        </div>
        <div>
          <input className="input__box " type="password" name="password" placeholder="password" />
         
        
        </div>
        <div>
          <input className="input__box " type="password" name="confirmpassword" placeholder="confirm password" />
         
        
        </div>
        <Button type="submit">register</Button>
      
        <Link to={'/login'} className="text-[#6741d9] hover:text-[#7950f2]">Got an account</Link>
     
      </Form>
    </main>
  );
}
export default SignUp;
