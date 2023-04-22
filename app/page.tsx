import Button from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <Button>Default</Button>
      <Button variant="destructive" size="sm">
        Destructive
      </Button>
      <Button variant="outline" size="lg">
        Outline
      </Button>
    </main>
  )
}
