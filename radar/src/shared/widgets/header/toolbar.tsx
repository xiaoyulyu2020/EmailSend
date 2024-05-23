'use client'
import React from 'react'
import {Button} from '@nextui-org/button';
import Link from "next/link";

const Toolbar = () => {
    return (
        <>
            <Button color="primary" className="text-lg">
                Start Trial
            </Button>
            <Link href="/sign-up">
                Log in
            </Link>
        </>
    )
}

export default Toolbar