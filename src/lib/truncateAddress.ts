export default function truncateAddress(address: string, padding = 4): string {
  return [address.slice(0, padding + 2), "...", address.slice(-padding)].join(
    ""
  );
}
