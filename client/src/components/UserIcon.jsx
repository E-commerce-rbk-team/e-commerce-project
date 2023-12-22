import React from 'react'
import '../css/UserIcon.css'
function UserIcon() {
  return (
    <div><img src="https://images-ext-1.discordapp.net/external/XjoCJLwMNJQrMq0DTYawsY9vY5xN64W8eyoIOoLqT1k/https/cdn-icons-png.flaticon.com/512/149/149071.png?format=webp&quality=lossless&width=581&height=581" alt="" />
        <div>
            <a href="">Manage My Account</a>
            <a href="">My Orders</a>
            <a href="">My Reviews</a>
            <a href="/Login">Logout</a>
        </div>
    </div>
  )
}

export default UserIcon