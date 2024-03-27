import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software, gadgets and technology I use."
      intro="Here is a list of some things I use that make me feel comfortable and productive. Even though it's theoretically possible to program without all these tools, what's the fun in that?"
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="AMD Ryzen 9 7950x">
            With 16 cores and 32 threads, this thing’s a beast of a processor. I
            don’t even think I’ve used it to its full capacity yet, unless its
            mining for some testnet ETH ofcourse.
          </Tool>
          <Tool title="Philips 279M1RV Monitor">
            I was using a 1080p TV prior to this, and the difference is night
            and day. The 4K resolution and 120Hz refresh rate is great for
            productivity by making the code I write look extra crisp and
            readable even while scrolling.
          </Tool>
          <Tool title="Keychron K3 Pro (Gateron Brown Switches)">
            The click and clack of mechanical switches is just unmatched.
            Especially for someone who types for a living, it really immerses
            you into whatever you are doing. The K3’s ability to toggle between
            mac or windows key layouts is really useful! I don’t have a mac but
            nice to know nonetheless.
          </Tool>
          <Tool title="Logitech G Pro Wireless">
            Not a productivity focused mouse but it’s light, wireless, and has a
            great sensor. It also helps me get some nice clip-worthy flick shots
            in Valorant.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            This has basically been my text editor since day 1 and I have no
            complaints. Although, I’ve been thinking of checking Neovim out once
            I’m disciplined enough to learn Vim motions.
          </Tool>
          <Tool title="WSL2">
            This makes developing on Windows a lot more bearable. I can run all
            my development tools in a Linux environment and still have access to
            all the Windows software I need.
          </Tool>
          <Tool title="Google Chrome">
            It’s the top web browser by market share which also makes it the
            best browser for testing web applications.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Forest">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
          <Tool title="Spotify">
            There’s nothing like a good playlist to get into the zone.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
