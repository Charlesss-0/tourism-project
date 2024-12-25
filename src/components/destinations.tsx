import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { MapPin, Star } from 'lucide-react'

import { Button } from './ui/button'
import Image from 'next/image'

const DESTINATIONS = [
	{
		title: 'Santorini, Greece',
		description:
			'A picturesque island in the Aegean Sea, known for its stunning sunsets and whitewashed buildings.',
		imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
		popular: true,
		rating: 4.5,
		price: '1,299',
	},
	{
		title: 'Machu Picchu, Peru',
		description:
			'A mysterious and awe-inspiring archaeological site nestled in the Andes Mountains.',
		imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1',
		popular: true,
		rating: 4.5,
		price: '1,499',
	},
	{
		title: 'Bali, Indonesia',
		description:
			'A tropical paradise known for its stunning beaches, lush rice terraces, and vibrant culture.',
		imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
		popular: true,
		rating: 4.5,
		price: '1,799',
	},
] as const

export default function Destinations(): React.ReactNode {
	return (
		<div className="py-20 px-14">
			<div className="mb-12 space-y-2 text-center">
				<h2 className="text-4xl font-bold">Popular Destinations</h2>

				<p className="text-neutral-600">Explore our most sought-after destinations</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{DESTINATIONS.map(destination => (
					<Card key={destination.title} className="overflow-hidden bg-white">
						<CardHeader className="overflow-hidden h-72 group">
							<Image
								src={destination.imageUrl}
								alt={destination.title}
								width={400}
								height={300}
								className="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:scale-110"
							/>

							<CardTitle className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
								<h3 className="text-xl text-neutral-50">{destination.title}</h3>
							</CardTitle>
						</CardHeader>

						<CardContent className="px-4 py-3">
							<CardDescription>{destination.description}</CardDescription>

							{destination.popular && (
								<div className="flex items-center justify-between py-2 mt-2">
									<div className="flex items-center gap-2">
										<MapPin className="stroke-blue-500" size={20} />

										<span className="text-sm text-blue-500">Popular Location</span>
									</div>

									<div className="flex items-center gap-2">
										<Star className="stroke-yellow-400 fill-yellow-400" size={20} />

										<span className="text-sm text-neutral-500">{destination.rating}</span>
									</div>
								</div>
							)}
						</CardContent>

						<CardFooter className="justify-between px-4 py-3">
							<p className="text-sm font-bold text-neutral-700">From ${destination.price}</p>

							<Button>Book Now</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
