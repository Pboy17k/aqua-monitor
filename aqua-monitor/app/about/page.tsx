import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About AquaMonitor</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              AquaMonitor is dedicated to providing cutting-edge water quality monitoring solutions. Our mission is to
              empower organizations and individuals with real-time data and insights to ensure the safety and
              sustainability of our water resources.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>The Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              AquaMonitor was built by Paul Emmanuel Maduka, a passionate developer committed to creating innovative
              solutions for environmental monitoring and conservation.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Our Location</CardTitle>
          <CardDescription>Visit us at our headquarters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative">
            <Image
              src="https://maps.googleapis.com/maps/api/staticmap?center=Lagos,Nigeria&zoom=12&size=600x300&key=YOUR_GOOGLE_MAPS_API_KEY"
              alt="Map of AquaMonitor headquarters"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

