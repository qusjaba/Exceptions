// Your IP: 208.127.245.162
function FindProxyForURL(url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  if (shExpMatch(host, "*.example.com")) return "DIRECT";
  if (isPlainHostName(host)) return "DIRECT";
  if (localHostOrDomainIs(host, "www.example.com")) return "PROXY local.proxy:8080";
  if (!isResolvable(host)) return "SOCKS4 example.com:1080";
  if (dnsDomainLevels(host) == 4) return "SOCKS4 example.com:1081";

  alert("Checking other rules...");
  alert(myIpAddress());

  // URLs within this network are accessed through
  // port 8080 on fastproxy.example.com:
  if (isInNet(host, "10.0.0.0", "255.255.248.0")) return "PROXY fastproxy.example.com:8080";

  if (dnsDomainIs(host, "example.com")) return "PROXY proxy2.example.com:8888";

  // All other requests go through port 8080 of proxy.example.com.
  // should that fail to respond, go directly to the WWW:
  return "PROXY proxy.example.com:8080; DIRECT";
}
