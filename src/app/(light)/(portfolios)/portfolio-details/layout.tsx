import NexusShell from "@/components/nexus/NexusShell";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <NexusShell>{children}</NexusShell>;
}
