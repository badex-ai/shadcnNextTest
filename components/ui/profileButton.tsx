import React from 'react'
import {Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuSeparator} from "@/components/ui/dropdown-menu"

function profileButton() {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src=""/>
                    <AvatarFallback>CN</AvatarFallback>

                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    Log Out
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default profileButton