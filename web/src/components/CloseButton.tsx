import {Popover} from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton()
{
    return(
        <Popover.Button className="top-6 right-6 absolute text-zinc-400 hover:text-zinc-100" title="Close Form">
            <X weight='bold' className="w-4 h-4 absolute"/>
        </Popover.Button>
    )
}