import { MessageSquare, Server, Cpu, Clock, AlertTriangle } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { StatusBadge } from './components/status-badge'
import { ModelCard } from './components/model-card'
import { StatCard } from './components/stat-card'

export function Dashboard() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search className="me-auto" />
        <ThemeSwitch />
        <ConfigDrawer />
        <ProfileDropdown />
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className="mb-6 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        </div>

        <div className="space-y-6">
          {/* System Status */}
          <section>
            <h2 className="mb-3 text-sm font-medium text-muted-foreground">
              System Status
            </h2>
            <div className="flex flex-wrap gap-3">
              <StatusBadge status="connected" label="Backend API" />
              <StatusBadge status="connected" label="Ollama" />
              <StatusBadge status="warning" label="Models: 1 available" />
              <StatusBadge status="disconnected" label="Database" />
            </div>
          </section>

          {/* Active Model + Quick Actions */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <ModelCard
                name="llama3.2"
                provider="Ollama"
                status="loaded"
                icon={<Cpu className="h-8 w-8" />}
              />
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button asChild variant="default" className="w-full justify-start">
                  <Link to="/ai-chat">
                    <MessageSquare className="me-2 h-4 w-4" />
                    New Chat
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/settings">
                    <Server className="me-2 h-4 w-4" />
                    Configure Models
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Usage Stats */}
          <section>
            <h2 className="mb-3 text-sm font-medium text-muted-foreground">
              Usage
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StatCard
                title="Conversations"
                value="—"
                description="No data yet"
                icon={<MessageSquare />}
              />
              <StatCard
                title="Messages"
                value="—"
                description="No data yet"
                icon={<Clock />}
              />
              <StatCard
                title="Avg Response Time"
                value="—"
                description="No data yet"
                icon={<AlertTriangle />}
              />
            </div>
          </section>

          {/* Recent Conversations */}
          <section>
            <h2 className="mb-3 text-sm font-medium text-muted-foreground">
              Recent Conversations
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Conversations</CardTitle>
                <CardDescription>
                  Your recent AI chat sessions will appear here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <MessageSquare className="mb-4 h-12 w-12 text-muted-foreground/40" />
                  <p className="text-sm font-medium">No conversations yet</p>
                  <p className="text-sm text-muted-foreground">
                    Start a new chat to see your history here.
                  </p>
                  <Button asChild className="mt-4" variant="outline">
                    <Link to="/ai-chat">
                      <MessageSquare className="me-2 h-4 w-4" />
                      Open AI Chat
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </Main>
    </>
  )
}
