'use client';

import { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't show if user previously dismissed
    if (localStorage.getItem('nooqs-install-dismissed') === 'true') {
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('nooqs-install-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-md bg-primary p-md shadow-level-3 md:bottom-6 md:left-auto md:right-6">
      <div className="flex items-start gap-sm">
        <div className="flex-1">
          <h3 className="text-label-md text-on-primary">
            Install Nooqs
          </h3>
          <p className="mt-1 text-body-sm text-on-primary/80">
            Add to your home screen for faster access and notifications.
          </p>
          <div className="mt-sm flex gap-sm">
            <button
              onClick={handleInstall}
              className="inline-flex items-center gap-1 rounded bg-available px-3 py-1.5 text-label-sm text-on-available transition-colors hover:bg-available-strong hover:text-on-available-strong"
            >
              <Download className="h-4 w-4" />
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="rounded px-3 py-1.5 text-label-sm text-on-primary/80 hover:text-on-primary"
            >
              Not now
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="rounded p-1 text-on-primary/80 transition-colors hover:text-on-primary"
          aria-label="Dismiss install prompt"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
