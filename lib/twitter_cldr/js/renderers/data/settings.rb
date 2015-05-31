# encoding: UTF-8

# Copyright 2012 Twitter, Inc
# http://www.apache.org/licenses/LICENSE-2.0

module TwitterCldr
  module Js
    module Renderers
      module DataRenderers
        module Settings

          class SettingsRenderer < TwitterCldr::Js::Renderers::Base
            set_template "mustache/data/settings.coffee"

            def is_rtl
              TwitterCldr::Shared::Languages.is_rtl?(self[:locale])
            end

            def current_locale
              self[:locale]
            end
          end

        end
      end
    end
  end
end






