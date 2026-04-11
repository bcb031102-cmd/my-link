import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/data/links";
import * as Icons from "lucide-react";
import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  link: Link;
  index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
  // 아이콘 동적 렌더링
  const IconComponent = (Icons as any)[link.icon || 'Link'] || Icons.Link;

  return (
    <div 
      className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <a 
        href={link.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <Card className="glass glass-hover border-none overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary/20">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <IconComponent size={24} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors duration-500">
                  {link.title}
                </h3>
                <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                  {link.url.replace(/^https?:\/\//, '')}
                </p>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary">
              <ExternalLink size={18} />
            </div>
          </CardContent>
          
          {/* 하단 글로우 효과 데코레이션 */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Card>
      </a>
    </div>
  );
}
