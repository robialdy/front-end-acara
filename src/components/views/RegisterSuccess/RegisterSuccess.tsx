import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-2">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.svg"
          alt="Logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustrations/success.svg"
          alt="Success"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-danger-500">
            Create Account Success!
        </h1>
        <p className="text-xl font-bold text-default-500">
            check your email for account activation
        </p>
        <Button className="mt-4 w-fit " variant="bordered" color="danger" onClick={() => router.push('/')}>
            Back To Home
        </Button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
