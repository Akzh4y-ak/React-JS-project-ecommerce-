import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import ServiceCards from '../components/ServiceCard'
import DiscountProducts from '../components/Discountproducts'

export default function Home() {
  return (
    <div>
      <HomeCarousel/>
      <ServiceCards/>
      <DiscountProducts/>
    </div>
  )
}
